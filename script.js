const postsDOM = document.querySelector(".posts");

let likeButtons = document.querySelectorAll(".post-like-btn");
let commentButtons = document.querySelectorAll(".post-comment-btn");
let shareButtons = document.querySelectorAll(".post-share-btn");
let deleteButtons = document.querySelectorAll(".post-delete-btn");
let settingsButtons = document.querySelectorAll(".post-settings-btn");

let username = "Erdem";

let posts = [
  {
    content: {
      text: "Hello World!",
      img: "./lab-gif.gif",
    },
    date: "08.01.2021",
    likeCount: 0,
    commentCount: 0,
    shareCount: 0,
    username: "Erdem Yilmaz",
    likedUsers: [],
    commentedUsers: [],
    sharedUsers: [],
  },
  {
    content: {
      text: "I love this place!",
      img: "./nature.jpg",
    },
    date: "08.01.2021",
    likeCount: 0,
    commentCount: 0,
    shareCount: 0,
    username: "Erdem Yilmaz",
    likedUsers: [],
    commentedUsers: [],
    sharedUsers: [],
  },
  {
    content: {
      text: "New PP!",
      img: "./pp.jpg",
    },
    date: "08.01.2021",
    likeCount: 0,
    commentCount: 0,
    shareCount: 0,
    username: "Erdem Yilmaz",
    likedUsers: [],
    commentedUsers: [],
    sharedUsers: [],
  },
  {
    content: {
      text: "BUY DOGE!",
      img: "./Doge-Coin.png",
    },
    date: "08.01.2021",
    likeCount: 0,
    commentCount: 0,
    shareCount: 0,
    username: "Erdem Yilmaz",
    likedUsers: [],
    commentedUsers: [],
    sharedUsers: [],
  },
  {
    content: {
      text: "You can see my projects from my github account",
      img: "./Factory-gif.gif",
    },
    date: "08.01.2021",
    likeCount: 0,
    commentCount: 0,
    shareCount: 0,
    username: "Erdem Yilmaz",
    likedUsers: [],
    commentedUsers: [],
    sharedUsers: [],
  },
  {
    content: {
      text: "Would you want to work with me? Contact me erdemyilmazx@icloud.com",
      img: "./contact-gif.gif",
    },
    date: "08.01.2021",
    likeCount: 0,
    commentCount: 0,
    shareCount: 0,
    username: "Erdem Yilmaz",
    likedUsers: [],
    commentedUsers: [],
    sharedUsers: [],
  },
];

for (let x = 0; x < posts.length; x++) {
  posts[x].id = x;
}

// localStorage.setItem("posts", JSON.stringify(posts));

if (localStorage.getItem("posts")) {
  posts = JSON.parse(localStorage.getItem("posts"));
}

initPosts = () => {
  posts.map(
    ({
      content: { text },
      content: { img },
      date,
      likeCount: like,
      commentCount: comment,
      shareCount: share,
      username: _username,
      id,
      likedUsers,
      commentedUsers,
      sharedUsers,
    }) => {
      let div = document.createElement("div");
      div.className = "post";
      div.setAttribute("data-value", id);

      let likedUsersText = likedUsers.map((user) => user.name);

      if (likedUsersText.length > 3) {
        likedUsersText = `${likedUsers[0].name}, ${likedUsers[1].name} and ${
          likedUsersText.length - 2
        } more`;
      }

      div.innerHTML = `

      <div class="post-menu">
        <div class="post-menu-item post-change-text-btn">Edit Text <i class="fas fa-pen menu-item-icon"></i></div>
        <div class="post-menu-item post-delete-btn">Delete Post <i class="fas fa-trash menu-item-icon"></i></div>
      </div>

      <div class="post-header">
      <div class="ph-left">
        <div class="post-pp">
          <img src="./pp.JPG" class="post-pp-img">
        </div>

        <div class="post-left-infos">
          <div class="post-username">${_username}</div>
          <div class="post-publish-date">${date}</div>
        </div>
      </div>

      <div class="post-settings-btn"><i class="fas fa-ellipsis-h"></i></div>
    </div>

    <div class="post-section">
      <div class="post-text">${text}</div>

      <div class="post-img-div"><img src='${img}' class="post-img"></div>

      <div class="post-footer">
        <div class="post-footer-top">
          <div class="post-icons">
            <div class="post-icon"></div>

            <div class="post-like-count"><i class="${
              likedUsers.length > 0 ? "fas active" : "far"
            } fa-thumbs-up post-like-count-icon"></i> <span class="like-count">${like}</span> Likes <span class="liked-users">${likedUsersText}</span></div>
          </div>

          <div class="post-infos">
            <div class="post-comment-count post-info"><span class="comment-count">${comment}</span> Comment</div>
            
            <div class="post-share-count post-info"><span class="share-count">${share}</span> Share</div>
          </div>
        </div>

        <div class="post-footer-bottom">
          <div class="pfb-item post-like-btn"><i class="far fa-thumbs-up"></i> Like</div>
          <div class="pfb-item post-comment-btn"><i class="far fa-comment"></i> Comment</div>
          <div class="pfb-item post-share-btn"><i class="fas fa-share"></i> Share</div>
        </div>
      </div> 
      `;

      let likeBtn = div.querySelector(".post-like-btn");
      let commentBtn = div.querySelector(".post-comment-btn");
      let shareBtn = div.querySelector(".post-share-btn");

      let hasUserLiked = likedUsers.find((user) => user.name == username);
      let hasUserCommented = commentedUsers.find(
        (user) => user.name == username
      );
      let hasUserShared = sharedUsers.find((user) => user.name == username);

      if (hasUserLiked) {
        likeBtn.classList.add("pfb-item-active");

        likeBtn.querySelector("i").className = "fas fa-thumbs-up";
      }

      if (hasUserCommented) {
        commentBtn.classList.add("pfb-item-active");

        commentBtn.querySelector("i").className = "fas fa-comment";
      }

      if (hasUserShared) {
        shareBtn.classList.add("pfb-item-active");

        shareBtn.querySelector("i").className = "fas fa-share-square";
      }

      postsDOM.prepend(div);
    }
  );

  likeButtons = document.querySelectorAll(".post-like-btn");
  commentButtons = document.querySelectorAll(".post-comment-btn");
  shareButtons = document.querySelectorAll(".post-share-btn");
  deleteButtons = document.querySelectorAll(".post-delete-btn");
  settingsButtons = document.querySelectorAll(".post-settings-btn");
};

window.onload = initPosts();

const header = document.querySelector("header");
const headerTop = document.querySelector(".header-top");
const footer = document.querySelector("footer");

let headersHeight = header.getBoundingClientRect().height;
let lastScrollPosition = 0;

function onScroll() {
  let currentPosition = window.pageYOffset;

  if (currentPosition >= lastScrollPosition) {
    headerTop.classList.remove("header-top-fixed");
    footer.classList.remove("footer-fixed");
  } else {
    headerTop.classList.add("header-top-fixed");
    footer.classList.add("footer-fixed");
  }

  lastScrollPosition = currentPosition;
}

backToTop = () => {
  headerTop.classList.remove("header-top-fixed");
  headerTop.style.position = "relative";

  window.scrollTo({
    top: 0,
  });
};

header.addEventListener("click", backToTop);

window.addEventListener("scroll", onScroll);

const footerItems = document.querySelectorAll(".footer-item");

resetFooterItems = () => {
  footerItems.forEach((item) => {
    item.classList.contains("footer-active")
      ? item.classList.remove("footer-active")
      : "";
  });
};

selectFooterActive = (e) => {
  resetFooterItems();

  if (e.target.classList.contains("footer-item")) {
    e.target.classList.add("footer-active");
  } else {
    e.target.parentElement.classList.add("footer-active");
  }
};

footerItems.forEach((item) => {
  item.addEventListener("click", selectFooterActive);
});

savePosts = () => {
  localStorage.setItem("posts", JSON.stringify(posts));
};

likePhoto = (e) => {
  let post;
  if (e.target.classList.contains("pfb-item")) {
    post = e.target.parentElement.parentElement.parentElement.parentElement;
  } else {
    post =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
  }

  let likeBtn = post.querySelector(".post-like-btn");
  let icon = likeBtn.querySelector("i");
  let likeCount = post.querySelector(".like-count");
  let likeCountIcon = post.querySelector(".post-like-count-icon");
  let likedUsersDiv = post.querySelector(".liked-users");

  let postObject = posts.find((pst) => pst.id == post.dataset.value);

  let likedUsersText = postObject.likedUsers.map((user) => user.name);

  let hasUserLiked = postObject.likedUsers.find(
    (user) => user.name == username
  );

  if (hasUserLiked == undefined) {
    postObject.likeCount++;

    likeCount.textContent = postObject.likeCount;

    icon.className = "fas fa-thumbs-up";
    likeBtn.classList.add("pfb-item-active");

    postObject.likedUsers.push({
      name: username,
      date: "Date",
    });

    likedUsersText = postObject.likedUsers.map((user) => user.name);

    if (likedUsersText.length > 3) {
      likedUsersText = `${postObject.likedUsers[0].name}, ${
        postObject.likedUsers[1].name
      } and ${likedUsersText.length - 2} more`;
    }

    likedUsersDiv.textContent = likedUsersText;

    likeCountIcon.classList.remove("far");
    likeCountIcon.classList.add("fas");
    likeCountIcon.classList.add("active");
  } else {
    postObject.likeCount--;
    icon.className = "far fa-thumbs-up";
    likeBtn.classList.remove("pfb-item-active");

    likeCount.textContent = postObject.likeCount;

    for (let x = 0; x < postObject.likedUsers.length; x++) {
      if (postObject.likedUsers[x].name == username) {
        postObject.likedUsers.splice(x, 1);
      }
    }

    likedUsersText = postObject.likedUsers.map((user) => user.name);

    if (likedUsersText.length > 3) {
      likedUsersText = `${postObject.likedUsers[0].name}, ${
        postObject.likedUsers[1].name
      } and ${likedUsersText.length - 2} more`;
    }

    likedUsersDiv.textContent = likedUsersText;

    if (postObject.likeCount == 0) {
      likeCountIcon.classList.add("far");
      likeCountIcon.classList.remove("fas");
      likeCountIcon.classList.remove("active");
    }
  }

  savePosts();
};

commentPost = (e) => {
  let post;
  if (e.target.classList.contains("pfb-item")) {
    post = e.target.parentElement.parentElement.parentElement.parentElement;
  } else {
    post =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
  }

  let commentBtn = post.querySelector(".post-comment-btn");
  let icon = commentBtn.querySelector("i");

  let commentCount = post.querySelector(".comment-count");

  let postObject = posts.find((pst) => pst.id == post.dataset.value);

  let hasUserCommented = postObject.commentedUsers.find(
    (user) => user.name == username
  );

  if (hasUserCommented == undefined) {
    postObject.commentCount++;

    commentCount.textContent = postObject.commentCount;

    icon.className = "fas fa-comment";
    commentBtn.classList.add("pfb-item-active");

    postObject.commentedUsers.push({
      name: username,
      date: "Date",
    });
  } else {
    postObject.commentCount--;
    icon.className = "far fa-comment";
    commentBtn.classList.remove("pfb-item-active");

    commentCount.textContent = postObject.commentCount;

    for (let x = 0; x < postObject.commentedUsers.length; x++) {
      if (postObject.commentedUsers[x].name == username) {
        postObject.commentedUsers.splice(x, 1);
      }
    }
  }
  savePosts();
};

sharePost = (e) => {
  let post;
  if (e.target.classList.contains("pfb-item")) {
    post = e.target.parentElement.parentElement.parentElement.parentElement;
  } else {
    post =
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
  }

  let shareBtn = post.querySelector(".post-share-btn");
  let icon = shareBtn.querySelector("i");

  let shareCount = post.querySelector(".share-count");

  let postObject = posts.find((pst) => pst.id == post.dataset.value);

  let hasUserShared = postObject.sharedUsers.find(
    (user) => user.name == username
  );

  if (hasUserShared == undefined) {
    postObject.shareCount++;

    shareCount.textContent = postObject.shareCount;

    icon.className = "fas fa-share-square";
    shareBtn.classList.add("pfb-item-active");

    postObject.sharedUsers.push({
      name: username,
      date: "Date",
    });
  } else {
    postObject.shareCount--;
    icon.className = "far fa-share";
    shareBtn.classList.remove("pfb-item-active");

    shareCount.textContent = postObject.shareCount;

    for (let x = 0; x < postObject.sharedUsers.length; x++) {
      if (postObject.sharedUsers[x].name == username) {
        postObject.sharedUsers.splice(x, 1);
      }
    }
  }
  savePosts();
};

deletePost = (e) => {
  let post = e.target.parentElement.parentElement;
  let postObject = posts.find((pst) => pst.id == post.dataset.value);

  postsDOM.removeChild(post);

  for (let x = 0; x < posts.length; x++) {
    if (posts[x].id == postObject.id) {
      posts.splice(x, 1);
    }
  }

  savePosts();
};

resetSettingsMenus = () => {
  let allSettingsMenus = document.querySelectorAll(".post-menu");

  allSettingsMenus.forEach((menu) => {
    menu.classList.contains("post-menu-active")
      ? menu.classList.remove("post-menu-active")
      : "";
  });
};

showSettingsMenu = (e) => {
  let post = e.target.parentElement.parentElement.parentElement;
  let settingsMenu = post.querySelector(".post-menu");

  console.log(settingsMenu);
  if (settingsMenu.classList.contains("post-menu-active")) {
    settingsMenu.classList.remove("post-menu-active");
  } else {
    resetSettingsMenus();
    settingsMenu.classList.add("post-menu-active");
  }
};

likeButtons.forEach((btn) => {
  btn.addEventListener("click", likePhoto);
});

commentButtons.forEach((btn) => {
  btn.addEventListener("click", commentPost);
});

shareButtons.forEach((btn) => {
  btn.addEventListener("click", sharePost);
});

deleteButtons.forEach((btn) => {
  btn.addEventListener("click", deletePost);
});

settingsButtons.forEach((btn) => {
  btn.addEventListener("click", showSettingsMenu);
});

const menuBtn = document.querySelector(".menu-btn");
const menuModal = document.querySelector(".menu-modal");

menuBtn.addEventListener("click", () => {
  menuModal.style.display = "flex";
});

menuModal.addEventListener("click", (e) => {
  if (e.target.className == "menu-modal") {
    menuModal.style.display = "none";

    resetFooterItems();
    footerItems[0].classList.add("footer-active");
  }
});

const darkModeBtn = document.querySelector(".change-theme-btn");

let theme = "light";

if (localStorage.getItem("facebook-theme")) {
  theme = localStorage.getItem("facebook-theme");
}

if (theme == "light") {
  document.body.classList.remove("dark-mode");
} else {
  document.body.classList.add("dark-mode");
}

darkModeBtn.addEventListener("click", () => {
  if (theme == "light") {
    theme = "dark";
    document.body.classList.add("dark-mode");

    darkModeBtn.textContent = "Light Theme";
  } else if (theme == "dark") {
    theme = "light";
    document.body.classList.remove("dark-mode");

    darkModeBtn.textContent = "Dark Theme";
  }

  localStorage.setItem("facebook-theme", theme);
});

let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    isDarkMode == true ? (isDarkMode = false) : (isDarkMode = true);

    changeTheme();
  });

changeTheme = () => {
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
};

changeTheme();

// SEND POST
const postTextInput = document.querySelector(".text-input");
const sendPostBtn = document.querySelector(".send-post-btn");

extraZero = (x) => {
  return x < 10 ? "0" + x : x;
};

sendPost = () => {
  let text = postTextInput.value;

  if (text.length != "") {
    let d = new Date();

    let day = extraZero(d.getDate());
    let month = extraZero(d.getMonth() + 1);
    let year = d.getFullYear();

    let date = [month, day, year].join(".");

    let div = document.createElement("div");
    div.className = "post";

    id = posts[posts.length - 1].id + 1;

    console.log(posts[posts.length - 1]);

    div.setAttribute("data-value", id);

    div.innerHTML = `
      <div class="post-menu">

      </div>
    
      <div class="post-header">
      <div class="ph-left">
        <div class="post-pp">
          <img src="./pp.JPG" class="post-pp-img">
        </div>

        <div class="post-left-infos">
          <div class="post-username">${username}</div>
          <div class="post-publish-date">${date}</div>
        </div>
      </div>

      <div class="post-settings-btn"><i class="fas fa-ellipsis-h"></i></div>
    </div>

    <div class="post-section">
      <div class="post-text">${text}</div>

      <div class="post-img-div"><img src="" class="post-img"></div>

      <div class="post-footer">
        <div class="post-footer-top">
          <div class="post-icons">
            <div class="post-icon"></div>

            <div class="post-like-count"><i class="far fa-thumbs-up post-like-count-icon"></i> <span class="like-count">0</span> Likes</div>
          </div>

          <div class="post-infos">
            <div class="post-comment-count post-info"><span class="comment-count">0</span> Comment</div>
            
            <div class="post-share-count post-info"><span class="share-count">0</span> Share</div>
          </div>
        </div>

        <div class="post-footer-bottom">
          <div class="pfb-item post-like-btn"><i class="far fa-thumbs-up"></i> Like</div>
          <div class="pfb-item post-comment-btn"><i class="far fa-comment"></i> Comment</div>
          <div class="pfb-item post-share-btn"><i class="fas fa-share"></i> Share</div>
        </div>
      </div> 
      `;

    posts.push({
      content: {
        text: text,
        img: "",
      },
      date: date,
      likeCount: 0,
      commentCount: 0,
      shareCount: 0,
      username: username,
      likedUsers: [],
      commentedUsers: [],
      sharedUsers: [],
      id: id,
    });

    let likeButton = div.querySelector(".post-like-btn");
    let commentButton = div.querySelector(".post-comment-btn");
    let shareButton = div.querySelector(".post-share-btn");
    let deleteButton = document.querySelector(".post-delete-btn");
    let settingsButton = document.querySelector(".post-settings-btn");

    likeButton.addEventListener("click", likePhoto);
    commentButton.addEventListener("click", commentPost);
    shareButton.addEventListener("click", sharePost);
    deleteButton.addEventListener("click", deletePost);
    settingsButton.addEventListener("click", showSettingsMenu);

    postsDOM.prepend(div);

    savePosts();

    postTextInput.value = "";
  }
};

sendPostBtn.addEventListener("click", sendPost);

postTextInput.addEventListener("click", () => {
  sendPostBtn.style.display = "flex";
});

postTextInput.addEventListener("keydown", () => {
  let textsLength = postTextInput.value.length;

  if (textsLength > -1) {
    sendPostBtn.style.filter = "brightness(1)";
  }
});
