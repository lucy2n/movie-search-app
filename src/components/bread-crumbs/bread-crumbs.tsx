import { Breadcrumbs, Anchor } from '@mantine/core';

export const MovieBreadCrumbs = ({ name }: { name: string }): JSX.Element => {
  
  const items = [
    { title: 'Movies', href: '/' },
    { title: name, href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
    </>
  );
}