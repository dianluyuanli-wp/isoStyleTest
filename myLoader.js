// module.exports = function loader(content) {
//     console.log('i am');
//     return content;
// }

module.exports = function(content, map, meta) {
    console.log(content, 'my loader');
    return content;
    //return someSyncOperation(content);
};
// module.exports.pitch = function pitch(request) {
//   if (this.cacheable) {
//     this.cacheable()
//   }
//   console.log(request, 'my pitch')
// }