export default function({ route }) {
    // 中间件当中可以做一些判断
    // console.log('这是中间件的js文件');
    // console.log('路由:',route);
    console.log(route);
    route.path == "/" ? console.log("现在是首页") : "";
}
