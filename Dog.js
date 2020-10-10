function Dog() {
    this.stomach = [];
}

// Add more comments to try out the git reset --soft
Dog.prototype.eat = function (cat) {
    this.stomach.push(cat);
};

module.exports = Dog;