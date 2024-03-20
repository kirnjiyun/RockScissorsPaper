import React, { Component } from "react";
import styles from "./box1.module.css"; // 스타일시트 경로는 동일하게 유지합니다.

class Box2 extends Component {
    render() {
        // this.props를 통해 부모 컴포넌트로부터 전달받은 props에 접근합니다.
        const { result, title, item } = this.props;

        // 조건에 따라 동적으로 스타일을 결정합니다.
        const boxStyle = {
            border:
                result === "짐"
                    ? "2px solid red"
                    : result === "이김"
                    ? "2px solid green"
                    : "",
        };

        // JSX를 이용하여 컴포넌트 UI를 구성합니다.
        return (
            <div className={styles.box} style={boxStyle}>
                <h1>{title}</h1>
                <img className={styles.img} src={item && item.img} alt="" />
                <h2>{result}</h2>
            </div>
        );
    }
}

export default Box2;
