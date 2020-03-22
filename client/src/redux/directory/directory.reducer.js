const INITIAL_STATE = {
    sections: [{
        title: 'hats',
        imageUrl: 'https://i.ibb.co/W61rx77/hats.jpg',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/FgmkwM4/jackets.jpg',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'trainers',
        imageUrl: 'https://i.ibb.co/vvkTmMs/trainers.jpg',
        id: 3,
        linkUrl: 'shop/trainers'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/8jsbhJk/women.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/XpzM343/men.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;