import { format } from 'date-fns';

/**
 * Tarihi belirtilen formata göre biçimlendirir.
 * @param {Date|string|number} date - Biçimlendirilecek tarih.
 * @param {string} dateFormat - Kullanılacak tarih formatı (varsayılan: 'dd/MM/yyyy').
 * @returns {string} Biçimlendirilmiş tarih.
 */
export const formatDate = (date, dateFormat = 'dd/MM/yyyy') => {
  try {
    return format(new Date(date), dateFormat);
  } catch (error) {
    console.error('Tarih formatlama hatası:', error);
    return '';
  }
};

/**
 * Öğelerin toplam fiyatını hesaplar.
 * @param {Array} items - Fiyat bilgisi içeren öğeler dizisi.
 * @returns {number} Toplam fiyat.
 */
export const calculateTotal = (items) => {
  if (!Array.isArray(items)) {
    console.error('Geçersiz parametre: items bir dizi olmalıdır.');
    return 0;
  }

  return items.reduce((acc, item) => {
    const price = typeof item.price === 'number' ? item.price : 0;
    return acc + price;
  }, 0);
};
