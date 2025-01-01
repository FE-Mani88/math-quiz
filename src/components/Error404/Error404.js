import React from 'react'
import { Link } from 'react-router-dom'
import './Error404.css'


export default function Error404() {
    return (
        <div class="error-content">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 ">
                        <div class="error-text">
                            <h1 class="error">خطای 404</h1>
                            <div class="im-sheep transition-all delay-500">
                                <div class="top">
                                    <div class="body"></div>
                                    <div class="head">
                                        <div class="im-eye one"></div>
                                        <div class="im-eye two"></div>
                                        <div class="im-ear one"></div>
                                        <div class="im-ear two"></div>
                                    </div>
                                </div>
                                <div class="im-legs">
                                    <div class="im-leg"></div>
                                    <div class="im-leg"></div>
                                    <div class="im-leg"></div>
                                    <div class="im-leg"></div>
                                </div>
                            </div>
                            <h4>صفحه مورد نظر شما یافت نشد!</h4>
                            <p id='errtxt'>احتمالا این صفحه به آدرس دیگری تغییر کرده یا حذف شده است.</p>
                            <Link to="/" class="btn btn-primary btn-round">بازگشت به صفحه اصلی</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
