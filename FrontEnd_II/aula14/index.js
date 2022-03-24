"use-stric";

const STORAGE = window.localStorage;

const btnSave = document.querySelector(`button`);
const commentInput = document.querySelector(`textarea`);
const commentsArea = document.querySelector(`.comments`);

const commentsArray = [];

const addComment = (item) => {
  const p = document.createElement(`p`);
  p.innerText = item;
  commentsArea.appendChild(p);
};

window.onload = () => {
  if (STORAGE.getItem(`comments`)) {
    STORAGE.getItem(`comments`)
      .split(`,`)
      .map((comment) => {
        commentsArray.push(comment);

        addComment(comment);
      });
  }
};

btnSave.addEventListener(`click`, (e) => {
  e.preventDefault();

  if (commentInput.value.length > 0) {
    commentsArray.push(commentInput.value);

    STORAGE.setItem(`comments`, commentsArray);

    addComment(commentInput.value);

    commentInput.value = ``;
  }
});
