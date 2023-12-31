interface ContactApiRequestBody {
  referer?: string;
  body: IContactForm;
}

interface IContactForm {
  dateFrom: string; // 希望日程（開始）
  dateTo: string; // 希望日程（終了）
  firstChoiceRoom?: string; // 希望物件
  name?: string; // 名前
  secondChoiceRoom?: string; // 第二希望物件
  budget?: string; // 予算
  email: string; // メールアドレス
  message: string; // お問い合わせ内容
}
