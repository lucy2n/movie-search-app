import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export default function MovieBreadCrumbs() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
    </>
  );
}