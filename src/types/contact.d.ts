interface ContactApiRequestBody {
  email: string;
}

interface IContactForm {
  dateFrom: string; // 希望日程（開始）
  dateTo: string; // 希望日程（終了）
  preferredProperty?: string; // 希望物件
  name?: string; // 名前
  secondChoiceProperty?: string; // 第二希望物件
  budget?: string; // 予算
  email: string; // メールアドレス
  message: string; // お問い合わせ内容
}
