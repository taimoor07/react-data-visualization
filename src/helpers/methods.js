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
                Angry: a.Angry + b.Angry,
                Comments: a.Comments + b.Comments,
                Haha: a.Haha + b.Haha,
                Likes: a.Likes + b.Likes,
                Love: a.Love + b.Love
            }
        }
        return a;
    };

    let formatedArray = [];
    uniArray.forEach(uniItem => {
        let iniValue = {
            Angry: 0,
            Comments: 0,
            Haha: 0,
            Likes: 0,
            Love: 0,
            PageName: uniItem
        }

        let uniPost = array.reduce(reducer, iniValue);
        formatedArray.push(uniPost);
    });

    return formatedArray;
}