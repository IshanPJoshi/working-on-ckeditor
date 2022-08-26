<template>
    <div id="app">
        <div @dblclick="bruh">
        <ckeditor :editor="editor" @click="isDisabled= false" @blur="disableCheck" v-model="editorData" @focus="exec" :config="editorConfig" :disabled="isDisabled" @ready="onReady"></ckeditor>
        </div>
        <button @click="isDisabled = false" v-if="isDisabled" button>Enable Edit</button>
        <button @click="isDisabled = true" v-else button>Enable Preview</button>
        <button @click="f">focus</button>
        <button @click="g">hocus</button>
          <Dialog header="Header" v-model:visible="displayBasic" :style="{width: '50vw'}">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="closeBasic" class="p-button-text"/>
                <Button label="Yes" icon="pi pi-check" @click="closeBasic" autofocus />
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import Editor from 'ckeditor5-custom-build/build/ckeditor';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {ref, watch} from 'vue'
import { useRoute, useRouter, } from "vue-router"
import { createSimpleExpression } from '@vue/compiler-core';
import Dialog from 'primevue/dialog';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
const router = useRouter()
const route = useRoute()

watch(() => route.params,(toParams, previousParams) => {
  console.log("param", toParams)     
  if (Object.keys(toParams).length>0) openBasic()
    // route.path.includes("todos") ? ((Object.keys(toParams).length==0) ? noparam() : someparam(toParams.category)) : console.log("changing route")
})
const openBasic = () => {
            displayBasic.value = true;
        };
 const displayBasic = ref(false);
    let editor = Editor
    // const ckeditor = CKEditor.component
    // console.log(ckeditor)
    let exec = () => {console.log("exec")}
    let bruh = () => {
      isDisabled.value = false
      editor.on('change:isReadOnly', f)
    }
    let f = () => {
      editor.editing.view.focus();
    }

    let disableCheck = () => {
      if(!document.getElementsByClassName("ck-link-form").length){
        isDisabled.value = true
      }
    }
    

    let onReady = async (edit) => {
      console.log("ready", edit)
      edit
      editor = edit
    }
    let isDisabled = ref(true)
    let editorData = "This is a test <a href='asdf'>what do you think</a>  "
    const editorConfig = {
      plugins: [GeneralHtmlSupport],
      toolbar: ['bold', 'italic', 'link', 'numberedList', 'bulletedList', '|', 'undo', 'redo', ],
      link: {
        decorators: {
            openInNewTab: {
                    mode: 'manual',
                    label: 'Open in a new tab',
                    attributes: {
                        onmouseover: 'console.log("test")'
                    }
                },
        }
      }
    }
  
</script>