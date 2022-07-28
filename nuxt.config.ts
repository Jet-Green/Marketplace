import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
    nitro: {
        preset: 'node-server'
    },
    serverMiddleware: [
        // Will register file from project server-middleware directory to handle /server-api/* requests
        { path: "/api", handler: "~/server-middleware/index.js" },
    ],
    meta: {
        link: [
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/icon?family=Material+Icons"
            }
        ]
    },
    css: ["@/assets/styles/main.scss"],
    vite: {
        plugins: [
            Components({
                // add option {resolveIcons: true} as parameter for resolving problem with icons
                resolvers: [AntDesignVueResolver()],
            }),
        ],
        // css: {
        //     preprocessorOptions: {
        //         scss: {
        //             additionalData: '@import "@/assets/styles/variables.scss"',
        //         },
        //     },
        // },
        // @ts-expect-error: Missing ssr key
        ssr: {
            noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue', '@ant-design/icons-vue'],
        },
    },
})
