import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

import { LINE_ACCOUNT } from '@/config/constants';

import styles from '@/components/ContactForm/index.module.scss';

interface Props {
  referer: string | null;
}

const ContactForm = ({ referer }: Props): JSX.Element => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>();

  /**
   * 全角数字を半角数字に変換する
   * @description 全角数字を半角数字に変換する
   * @param {string} value 変換する文字列
   * @returns {string} 変換後の文字列
   */
  const toHalfWidth = (value: string): string =>
    value.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0));

  /**
   * お問い合わせフォームの送信処理
   * @description お問い合わせフォームの送信処理
   * @param {IContactForm} data お問い合わせフォームのデータ
   * @returns {void}
   */
  const onSubmit: SubmitHandler<IContactForm> = (data) => {
    console.log(data);
    const body: ContactApiRequestBody = {
      referer: referer || '',
      body: data,
    };
    // ここでフォームのデータをサーバーに送信します。
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((req) => {
        console.log('Success:', req);
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
        <h1>お問い合わせ</h1>
        <button className={styles.lineButton} type="button">
          <Link
            className={styles.navItem}
            href={LINE_ACCOUNT}
            target="_blank"
            rel="noopener noreferrer"
          >
            LINEコンシェルジュを活用する
          </Link>
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="budget">
              価格帯（円）<text className={styles.optional}>任意</text>
            </label>
            <div className={styles.memo}>1泊あたりの宿泊料金</div>
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
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="email">
              フリーコメント<text className={styles.optional}>任意</text>
            </label>
            <div>
              <textarea
                id="message"
                {...register('message', {})}
                placeholder={`お問い合わせ内容を入力してください。\n質問があればこちらに記載してください。`}
                defaultValue=""
                rows={5}
              />
              {errors.message && <div className={styles.error}>{errors.message.message}</div>}
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
