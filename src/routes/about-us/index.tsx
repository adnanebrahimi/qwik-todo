import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
 const store = useStore({
    adnan: 123
 });


  return (
    <div>
      <h1>About Us</h1>
      <p>
        <a href="/">Home</a>
        {store.adnan}
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'About Us',
};
