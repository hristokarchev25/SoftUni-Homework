function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            let output = super.toString() + '\n';
            output += `Ratings: ${this.likes - this.dislikes}\n`;

            if (this.comments.length > 0) {
                output += `Comments:\n`;
                this.comments.forEach(c => output += ` * ${c}\n`);
            }
            return output.trim();
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views++;
            return this;
        }
        toString() {
            let output = super.toString() + '\n';
            output += `Views: ${this.views}`;
            return output.trim();
        }
    }
    return { Post, SocialMediaPost, BlogPost };
}
solve();
let app = solve();
let scm = new app.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
