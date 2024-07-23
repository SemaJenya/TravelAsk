import photo1 from '../images/photo1.svg';
import photo2 from '../images/photo2.svg';
import photo3 from '../images/photo3.svg';

const comment_1 = `Барселона – моя третья большая
любовь, после Вены и Крита. Это
город, в который я каждый раз
возвращаюсь с огромным
удовольствием, всем
рекомендую хоть раз там 
побывать и осмотреть ...`;

const comment_2 = `Барселона – моя третья большая
любовь, после Вены и Крита. Это
город, в который я каждый раз
возвращаюсь с огромным
удовольствием, всем
рекомендую хоть раз там 
побывать и осмотреть ...`;

const comment_3 = `Барселона – моя третья большая
любовь, после Вены и Крита. Это
город, в который я каждый раз
возвращаюсь с огромным
удовольствием, всем
рекомендую хоть раз там 
побывать и осмотреть ...`;

const comment_4 = `Барселона – моя третья большая
любовь, после Вены и Крита. Это
город, в который я каждый раз
возвращаюсь с огромным
удовольствием, всем
рекомендую хоть раз там 
побывать и осмотреть ...`;

const comment_5 = `Барселона – моя третья большая
любовь, после Вены и Крита. Это
город, в который я каждый раз
возвращаюсь с огромным
удовольствием, всем
рекомендую хоть раз там 
побывать и осмотреть ...`;

                  
const date1 = new Date("8-11-2023");
const date2 = new Date("2-11-2024");
const date3 = new Date("5-11-2024");
const date4 = new Date("1-11-2024");
const date5 = new Date("10-11-2023");
const date6 = new Date("4-11-2023");
const date7 = new Date("6-11-2023");
const currentDate = new Date();

function monthDiff(dateFrom, dateTo) {
 return dateTo.getMonth() - dateFrom.getMonth() + 
   (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
};

const diff_1 = monthDiff(date1, currentDate);
const diff_2 = monthDiff(date2, currentDate);
const diff_3 = monthDiff(date3, currentDate);
const diff_4 = monthDiff(date4, currentDate);
const diff_5 = monthDiff(date5, currentDate);
const diff_6 = monthDiff(date6, currentDate);
const diff_7 = monthDiff(date7, currentDate);

export const reviews = [
     {  id: 1,
        name: 'Наталия Полянская',
        comment: comment_1,
        photos: [photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2],
        date: diff_1,
        comments: 9,
        likes: 9
    },

    {   id: 2,
        name: 'Elena Bulgakova',
        comment: comment_2,
        photos: [photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2],
        date: diff_2,
        comments: 5,
        likes: 3
    },

    {   id: 3,
        name: 'Наталия Полянская',
        comment: comment_3,
        photos: [photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2],
        date: diff_3,
        comments: 2,
        likes: 7
    },

    {   id: 4,
        name: 'Benedict Cumberbatch',
        comment: comment_4,
        photos: [photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2],
        date: diff_4,
        comments: 0,
        likes: 1
    },

    {   id: 5,
        name: 'Iron man',
        comment: comment_5,
        photos: [photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2],
        date: diff_5,
        comments: 7,
        likes: 9
    },

    {   id: 6,
        name: 'Iron man 2',
        comment: comment_5,
        photos: [photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2],
        date: diff_6,
        comments: 7,
        likes: 9
    },

    {   id: 6,
        name: 'Iron man 3',
        comment: comment_5,
        photos: [photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2],
        date: diff_7,
        comments: 7,
        likes: 9
    },
]