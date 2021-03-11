function solve(input) {
    let result = input.map(([width, height]) => {
        return {
            width,
            height,
            area: function () {
                return this.width * this.height;
            },
            compareTo(rect) {
                let res = rect.area - this.area();
                if (res == 0) {
                    return rect.width - this.width;
                }

                return res;
            },
        } ///return===({width,height}) //area: ()=> width*height
    });
    /* result.forEach(e => {
        console.log(e.area());
        
    });    
    console.log(result); */
    result.sort((a, b) => {
        return b.compareTo(a);
    });
     return result;
}
solve([[10, 5], [5, 12]]);