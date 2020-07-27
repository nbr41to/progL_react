import React from 'react';
import Section from "../components/Section"

const Home = () => {
    return (
        <React.Fragment>
            <h1>Home</h1>
            {section_contents.map((sc) => {
                return (
                    <Section
                        ttl={sc.ttl}
                        text={sc.text}
                        img_src={sc.img_src}
                    />
                )
            })}
        </React.Fragment>
    );
}

export default Home;

// sectionの中身
const section_contents = [
    {
        ttl: "React",
        text: "Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.Reactは本当にすごい.",
        img_src: "http://placehold.jp/200x300.png"
    },
    {
        ttl: "JavaScript",
        text: "JavaScriptはJavaScriptです.はい.JavaScriptはJavaScriptです.はい.JavaScriptはJavaScriptです.はい.JavaScriptはJavaScriptです.はい.JavaScriptはJavaScriptです.はい.JavaScriptはJavaScriptです.はい.JavaScriptはJavaScriptです.はい.JavaScriptはJavaScriptです.はい.JavaScriptはJavaScriptです.はい.JavaScriptはJavaScriptです.はい.JavaScriptはJavaScriptです.はい.",
        img_src: "http://placehold.jp/200x300.png"
    },
    {
        ttl: "Ruby",
        text: "Rubyは日本人が作った言語です！Rubyは日本人が作った言語です！Rubyは日本人が作った言語です！Rubyは日本人が作った言語です！Rubyは日本人が作った言語です！Rubyは日本人が作った言語です！Rubyは日本人が作った言語です！Rubyは日本人が作った言語です！Rubyは日本人が作った言語です！Rubyは日本人が作った言語です！Rubyは日本人が作った言語です！Rubyは日本人が作った言語です！",
        img_src: "http://placehold.jp/200x300.png"
    },
    {
        ttl: "Python",
        text: "Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.Pythonはぴよぴよ.",
        img_src: "http://placehold.jp/200x300.png"
    },
]