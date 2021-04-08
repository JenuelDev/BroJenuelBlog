<template>
    <no-ssr>
    <div class="flex justify-center" style="width: 100% !important">
        <vue-code-highlight language="javascript">
            <pre>
            <slot />
            </pre>
        </vue-code-highlight>
    </div>
    </no-ssr>
</template>
<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';

export default {
    components:{
        VueCodeHighlight
        }
}

</script>