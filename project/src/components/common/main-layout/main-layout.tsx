import { Header, Footer } from '../common';

type Props = {
  children: JSX.Element | null;
}

function MainLayout({ children }: Props): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
