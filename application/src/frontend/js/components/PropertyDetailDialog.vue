<template>
<v-layout row justify-center>
    <v-dialog v-model="dialogIsOpen" fullscreen transition="dialog-bottom-transition" :overlay="false">
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon @click.native="$emit('close-dialog')" dark>
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Detail: {{propertyDetailObj.prop_address}}</v-toolbar-title>
            </v-toolbar>
            
        </v-card>
    </v-dialog>
</v-layout>
</template>

<script>
    export default{
        data: function(){
            return {
            };
        },
        props: ["propertyDetailObj", "dialogIsOpen"],
    }
</script>