import { Avatar, Card } from 'antd'
import Title from 'antd/lib/skeleton/Title'
import React from 'react'

const SearchResults = () => {
    return (
        <div>
            <h1>Displaying Results for: <strong>Joseph Mbuku</strong></h1>

            <Title>Facebook</Title>
            <Card>
                <Avatar>JM</Avatar>
                <h2>jowey-jose</h2>
                <link>www.josephmbuku.com</link>

            </Card>
        </div>
    )
}

export default SearchResults
