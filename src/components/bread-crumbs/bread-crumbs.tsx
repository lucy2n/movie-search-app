import { Breadcrumbs, Anchor } from '@mantine/core';

export default function MovieBreadCrumbs({ name }: string) {
  
  const items = [
    { title: 'Movies', href: 'http://localhost:3001/' },
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