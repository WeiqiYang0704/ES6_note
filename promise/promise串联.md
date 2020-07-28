# 8-5 Promise 的串联

当后续的Promise需要用到之前的Promise的处理结果时，需要Primise的串联

Promise 对象中，无论是 .then 还是 .catch方法，他们都具有返回值，返回的是一个全新的Promise对象，它的状态满足下面的规则：
1. 如果当前的Promise是未决的，得到的是Promise是挂起状态
2. 如果当前的Primise是已决的，会运行响应的后续处理函数，并将后续处理函数的结果（返回值）作为resolved状态数据，应用到新的Promise中，如果后续处理函数发生错误，则把返回值作为rejected状态数据，应用到新的Promise中。

**后续的Promise一定会等到前面的Promise有了后续处理结果后，才会变成已决状态**

细节：如果前面的promise的后续处理，返回的是一个Promise,则返回的新的Promise状态和后续处理返回的Promise状态保持一致。意识就是如果返回值是一个promise对象，则会解析，然后返回。
