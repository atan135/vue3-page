<script setup>
import {ref} from 'vue'
//import {GetKey, SetKey, RemoveKey, ClearKey, HasKey, GetKeyNum, GetAllKey} from '../utils/localstorage'
import LocalStorage from '../utils/localstorage'
import {WebStorage} from 'vue-web-storage'

const key = ref('');
const value = ref('');
const key_value = ref('');
const all_keys = ref('');


function SetKeyValue(){
    let s1 = key_value.value.split(',')[0]
    let s2 = key_value.value.split(',')[1]
    console.log(s1, s2)
    key.value = s1
    value.value = s2
    LocalStorage.SetKey(key.value, value.value)
}
function GetKeyValue(){
    value.value = LocalStorage.GetKey(key.value)
}
function CheckKey(){
    console.log(LocalStorage.HasKey(key.value))
}
function RemoveKey(){
    LocalStorage.RemoveKey(key.value)
}
function ClearAllKey(){
    LocalStorage.ClearKey();
}
function GetKeyNum(){
    console.log(LocalStorage.GetKeyNum());
}
function GetAllKey(){
    console.log(LocalStorage.GetAllKey());
}
</script>

<template>
    <h3>测试LocalStorage & SessionStorage</h3>
        <p>库使用vue-web-storage</p>
        <van-cell-group inset> <van-field v-model="key_value" label="文本" placeholder="请输入用户名" /> </van-cell-group>
        <van-button @click="SetKeyValue" type="primary">设置key值</van-button>
        <van-cell-group inset><van-field v-model="key" label="文本" placeholder="请输入用户名" /> </van-cell-group>
        <van-button @click="GetKeyValue" type="primary">搜索key值</van-button>
        <van-button @click="CheckKey" type="primary">判定Key存在</van-button>
        <van-button @click="RemoveKey" type="primary">删除Key</van-button>
        <van-button @click="ClearAllKey" type="primary">清空Key</van-button>
        <van-button @click="GetKeyNum" type="primary">获取所有Key数量</van-button>
        <van-button @click="GetAllKey" type="primary">获取所有Key</van-button>
        <p>value值：{{ value }}</p>
    <code>
        查看 localstorage.js
    </code>
</template>

<style scoped>
</style>
