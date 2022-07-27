<template>
    <div>
        <Html>

        <Head>
            <Title>Marketplace</Title>
            <!-- <Meta name="description" content="My page is cool" /> -->
            <!-- <Link rel="preload" href="https://www.iconpacks.net/icons/2/free-sad-face-icon-2691-thumb.png" as="script" /> -->
        </Head>

        </Html>

        <TheHeader />
        <a-row type="flex" justify="center">
            <a-col :span="22">
                <slot />
            </a-col>
        </a-row>
    </div>
</template>