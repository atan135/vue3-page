import {StorageConfig} from '../config/storage'
import {WebStorage} from 'vue-web-storage'

let ws = new WebStorage(StorageConfig.prefex, StorageConfig.drivers);
// 设置key，json会自动stringify
function SetKey(key, value){
    ws.set(key, value);
}
// 获取key的值，json会自动生成对象
function GetKey(key){
    return ws.get(key);
}
// 删除key
function RemoveKey(key){
    return ws.remove(key);
}
// 清空key，如果传参true，则不考虑前缀设置全部清空
function ClearKey(){
    return ws.clear();
}
// 获取所有的key
function GetAllKey(){
    return ws.keys();
}
// 判定key是否存在
function HasKey(key){
    return ws.hasKey(key);
}
// 获取所有key数量
function GetKeyNum(){
    return ws.length();
}
export default {
    SetKey,
    GetKey,
    RemoveKey,
    ClearKey,
    GetAllKey,
    HasKey,
    GetKeyNum,
}
/*
export {
    SetKey,
    GetKey,
    RemoveKey,
    ClearKey,
    GetAllKey,
    HasKey,
    GetKeyNum,
};
*/