import BaseLayout from '@/layout/BaseLayout';
import ContactForm from '@/components/ContactForm';
const Contact: React.FC = () => {
  return (
    <BaseLayout>
      <h1>お問い合わせ</h1>
      <ContactForm />
    </BaseLayout>
  );
};

export default Contact;
