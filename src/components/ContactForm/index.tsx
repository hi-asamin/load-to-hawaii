import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
  number: number;
  preferredDate: string;
  preferredProperty: string;
  name?: string;
  secondChoiceProperty?: string;
  budget?: number;
};

const ContactForm: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        メールアドレス:
        <input
          {...register('email', {
            required: 'メールアドレスは必須です',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '無効なメールアドレス',
            },
          })}
        />
      </label>
      {errors.email && <span>{errors.email.message}</span>}
      {/* 他のフォームフィールドも同様に実装します。 */}
      {/* ... */}
      <button type="submit">メールで問い合わせする</button>
    </form>
  );
};

export default ContactForm;
