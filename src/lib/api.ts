export interface BookingData {
  name: string;
  phone: string;
  message?: string;
}

/**
 * Submit booking request.
 * Currently a stub - returns success without sending anything.
 * TODO: подключить Telegram-бот для отправки заявок
 * TODO: подключить отправку на email lihomans@mail.ru
 */
export async function submitBooking(data: BookingData): Promise<{ success: boolean }> {
  // TODO: подключить Telegram-бот
  // TODO: подключить email отправку
  console.log("Booking submitted (stub):", data);

  // Simulate network delay for UX
  await new Promise((resolve) => setTimeout(resolve, 800));

  return { success: true };
}
