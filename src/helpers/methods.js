export const formateData = (array) => {
    // findout unique keys
    let uniArray = array.map(item => item.PageName)
        .filter((value, index, self) => self.indexOf(value) === index);
    // remove null values
    uniArray = uniArray.filter(el => el != null);

    // reduce array to specific object
    const reducer = (a, b) => {
        if (b.PageName === a.PageName) {
            return {
                PageName: a.PageName,
                Shares: a.Shares + b.Shares,
                Likes: a.Likes + b.Likes,
                Comments: a.Comments + b.Comments,
                Haha: a.Haha + b.Haha,
                Love: a.Love + b.Love,
                Wow: a.Wow + b.Wow,
                Angry: a.Angry + b.Angry
            }
        }
        return a;
    };

    let formatedArray = [];
    uniArray.forEach(uniItem => {
        let iniValue = {
            Shares: 0,
            Likes: 0,
            Comments: 0,
            Haha: 0,
            Love: 0,
            Wow: 0,
            Angry: 0,
            PageName: uniItem
        }

        let uniPost = array.reduce(reducer, iniValue);
        formatedArray.push(uniPost);
    });

    return formatedArray;
}