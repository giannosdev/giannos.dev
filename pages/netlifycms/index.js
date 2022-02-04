import dynamic from 'next/dynamic';
const config = {
    backend: {
        name: 'github',
        repo: 'giannosdev/giannos.dev',
        branch: 'main',
    },
    publish_mode: 'editorial_workflow',
    media_folder: "data/assets",
    public_folder: "/assets",
    collections: [{
        name: "project",
        label: "Project",
        folder: "data/projects",
        create: true,
        slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
        fields: [
            {label: "Layout", name: "layout", widget: "hidden", default: "project"},
            {label: "Title", name: "title", widget: "string"},
            {label: "Featured Image", name: "thumbnail", widget: "image"},
        ]
    }],
};
const CMS = dynamic(
    () =>
        import('netlify-cms-app').then((cms) => {
            cms.init({ config });
        }),
    { ssr: false, loading: () => <p>Loading Admin...</p> },
);

const Admin = () => {
    return <CMS />;
};
export default Admin;