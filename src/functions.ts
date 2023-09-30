import * as path from "path";
import * as dotenv from "dotenv";

const rootDir = path.join(__dirname, "../");       // プロジェクトのルートディレクトリ

export const functions = {
    help() {
        dotenv.config({ path: rootDir + ".env" });       // アプリのある位置の.envを取得したい場合
        //dotenv.config();                               // 起動するディレクトリの.envを取得したい場合
        console.log(`ENV = ${process.env.ENV}`);
        console.log(`this file = "${__filename}"`);
        console.log(`this dir  = "${__dirname}"`);
        console.log(`root dir  = "${rootDir}"`);

        console.log(`Args:`);
        for (let i = 0; i < process.argv.length; i++) {
            console.log(`  arg[${i}] = "${process.argv[i]}"`);
        }
    },

    test(): string {
        return "test";
    },
};
