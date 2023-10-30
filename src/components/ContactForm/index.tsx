import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

import styles from '@/components/ContactForm/index.module.scss';

type Inputs = {
  number?: number; // 人数
  dateFrom: string; // 希望日程（開始）
  dateTo: string; // 希望日程（終了）
  preferredProperty: string; // 希望物件
  name?: string; // 名前
  secondChoiceProperty?: string; // 第二希望物件
  budget?: string; // 予算
  email: string; // メールアドレス
};

const ContactForm: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  /**
   * 全角数字を半角数字に変換する
   * @description 全角数字を半角数字に変換する
   * @param {string} value 変換する文字列
   * @returns {string} 変換後の文字列
   */
  const toHalfWidth = (value: string): string =>
    value.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0));

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // ここでフォームのデータをサーバーに送信します。
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // 問い合わせが成功したポップアップを表示する
        alert('問い合わせが成功しました');
        router.push('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('問い合わせが失敗しました');
      });
  };

  return (
    <>
      <div className={styles.container}>
        <h1>お問い合わせフォーム</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="budget">
              旅の予算（円）<text className={styles.optional}>任意</text>
            </label>
            <div>
              <input
                id="budget"
                {...register('budget', {
                  setValueAs: toHalfWidth,
                  pattern: {
                    value: /^[0-9]+$/,
                    message: '予算は数字で入力してください',
                  },
                })}
                placeholder="1000000"
                defaultValue=""
              />
              {errors.budget && <div className={styles.error}>{errors.budget.message}</div>}
            </div>
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="email">
              メールアドレス<text className={styles.required}>必須</text>
            </label>
            <div>
              <input
                id="email"
                {...register('email', {
                  required: 'メールアドレスは必須です',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: '無効なメールアドレスです',
                  },
                })}
                placeholder="luanastay@gmail.com"
                defaultValue=""
              />
              {errors.email && <div className={styles.error}>{errors.email.message}</div>}
            </div>
          </div>
          <button className={styles.subumitButton} type="submit">
            メールで問い合わせする
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
