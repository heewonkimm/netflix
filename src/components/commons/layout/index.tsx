import LayoutFooter from './footer/LayoutFooter';
import LayoutHeader from './header/LayoutHeader';

export default function Layout(props: any) {
  // any 수정
  return (
    <>
      <LayoutHeader />
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}
