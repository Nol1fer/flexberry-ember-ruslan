import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        authorName: "А.С. Пушкин", bookName: "Евгений Онегин"
      },
      {
        authorName: "Л.Н. Толстой", bookName: "Война и мир"
      }
    ];
  }
});
