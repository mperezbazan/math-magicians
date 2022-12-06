import React from 'react';

const HomeContainer = () => {
  const title = 'Welcome to our page!';
  const firstParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nisi vitae augue sagittis rutrum nec at est. In augue mi, venenatis eget mi ultrices, varius iaculis enim. Ut posuere, leo in congue ullamcorper, nulla lacus commodo ligula, et faucibus mauris sem quis sapien. Etiam hendrerit justo mauris, quis egestas mi maximus vel. Aliquam in purus convallis, commodo est at, ullamcorper elit. Proin consectetur, dolor in tristique placerat, est quam posuere urna, dapibus placerat nulla ex eu urna. Donec eu fringilla odio. Donec consequat ut dui at mattis. Sed bibendum lobortis orci et efficitur. Maecenas in neque molestie nisl pellentesque sodales. Donec fringilla eget magna et cursus. Suspendisse eu lorem est. Vestibulum scelerisque varius vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.l';
  const secondParagraph = 'Sed non ipsum sapien. Pellentesque blandit sodales justo pretium tristique. Curabitur sagittis diam velit, at auctor augue euismod ut. Duis efficitur eu neque sit amet iaculis. Nulla sagittis auctor imperdiet. Vestibulum sit amet lorem imperdiet, consequat nisl in, vehicula ante. Morbi eget luctus est. Aenean facilisis nunc vel sem volutpat maximus. Morbi vel maximus nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ut ullamcorper nisi, consectetur mattis urna. Quisque arcu leo, condimentum non tincidunt et, sollicitudin et augue.';
  return (
    <div className="home-container">
      <h1 className="page-title">{title}</h1>
      <p className="home-text">{firstParagraph}</p>
      <p className="home-text">{secondParagraph}</p>
    </div>
  );
};

export default HomeContainer;
