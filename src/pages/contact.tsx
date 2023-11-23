import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import BaseLayout from '@/layout/BaseLayout';
import ContactForm from '@/components/ContactForm';

interface Props {
  referer: string | null;
}

const Contact: NextPage<Props> = ({ referer }) => {
  return (
    <BaseLayout>
      <ContactForm referer={referer} />
    </BaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  const referer = context.req.headers.referer || null;
  return {
    props: {
      referer,
    },
  };
};

export default Contact;
