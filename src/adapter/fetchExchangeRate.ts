interface ExchangeRate {
  high: string;
  open: string;
  bid: string;
  currencyPairCode: string;
  ask: string;
  low: string;
}

export const fetchExchangeRate = async () => {
  try {
    // fetch関数を使って、外部APIからデータを取得する
    const response = await fetch('https://www.gaitameonline.com/rateaj/getrate');

    // レスポンスがOKでない場合、エラーをスローする
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rate');
    }

    // レスポンスのJSONを取得する
    const json: ExchangeRate[] = await response.json();

    const usdjpy: ExchangeRate | undefined = json.find(
      (rate) => rate.currencyPairCode === 'USDJPY'
    );

    const usdjpyRate: number | undefined = Number(usdjpy?.ask);

    // レスポンスのJSONを返す
    return usdjpyRate;
  } catch (error: unknown) {
    // エラーの型を確認して、Error型である場合のみエラーメッセージを表示する
    if (error instanceof Error) {
      console.error('Error fetching exchange rate:', error.message);
    } else {
      console.error('An unknown error occurred:', error);
    }
    throw error;
  }
};
