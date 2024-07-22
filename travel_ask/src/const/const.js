import photo1 from '../images/photo1.svg';
import photo2 from '../images/photo2.svg';
import photo3 from '../images/photo3.svg';

const comment_1 = `Барселона – моя третья большая любовь, после Вены и Крита. Это
                  город, в который я каждый раз возвращаюсь с огромным удовольствием, всем\nрекомендую хоть раз там 
                  побывать и осмотреть ...`

const date1 = new Date("8-11-2023");
const currentDate = new Date()

function monthDiff(dateFrom, dateTo) {
 return dateTo.getMonth() - dateFrom.getMonth() + 
   (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

const diff_1 = monthDiff(date1, currentDate)
console.log(diff_1, 'diff');

export const reviews = {
    user_1: {
        name: 'Наталия Полянская',
        comment: comment_1,
        photos: [photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2, photo3, photo1, photo2],
        date: diff_1,
        comments: 9,
        likes: 9
    }
 }