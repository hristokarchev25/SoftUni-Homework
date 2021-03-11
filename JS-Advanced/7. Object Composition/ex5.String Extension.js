(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.length === 0 ? true : false;
    };

    String.prototype.truncate = function (n) {
        if (n <= 3) {
            return ".".repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.substr(0, n - 2).lastIndexOf(" ");
            if (lastIndex != -1) {
                return this.substr(0, lastIndex) + "...";
            } else {
                return this.substr(0, n - 3) + "...";
            }
        }
    };

    String.format = function (str, ...params) {
        
        let pattern = /{([0-9]+)}/g;
        let index;
        while (index = pattern.exec(str)) {
            console.log(index[1]);
            if (params[index[1]]) {
                str = str.replace(index[0], params[index[1]]);
            }
        }
        return str;
    }
})();