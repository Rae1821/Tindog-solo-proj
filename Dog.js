// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

   setMatchStatus(bool) {
        this.hasBeenliked = bool;
        this.hasBeenSwiped = true;
   }

    getDogHtml() {
        const { name, avatar, age, bio } = this;
        return `
            <div class="dog-info">
                <img class="dog-img" src="${avatar}"/>
                <div class="dog-description">
                    <p class="name-age">${name},${age} </p>
                    <p class="dog-tagline">${bio}</p>
            </div>
        `
    }


}
export default Dog