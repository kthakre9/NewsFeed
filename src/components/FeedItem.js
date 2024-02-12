import styled from 'styled-components';

const FeedWrapper = styled.div`
background-color: white;
margin: 60px 7rem;
padding: 0 2rem;

a {
    text-decoration: none;
}
`

const Feed = styled.div`
display: flex;
padding: 1.5rem 0;
border-bottom: 1px solid black;
color: black;

& :last-child {
    border-bottom: none;
}
`

const FeedInfo = styled.div`
width: 70%;
margin-right: 1rem;

h2 {
    margin-top: 10px;
}

p:first-child {
    font-size: 12px;
    color: #666666;
    text-transform: uppercase;
}

p:last-child {
    margin-top: 2.5rem;
    font-size: 12px;
    color: #666666;
    text-transform: uppercase;
}
`

export const FeedItem = ({ data }) => {
    return (
        <FeedWrapper role="main" data-cy-root="feed">
            {data && data.map((item) => {
                //not ideal. Need unique keys
                const key = item.title.split(" ").join("").slice(0, 16)

                return (
                    <a data-cy={`feed_item_${key}`} href={item.link} target="_blank" rel="noopener noreferrer" key={key}>
                        <Feed>
                            <FeedInfo>
                                <p>{item.date}</p>
                                <h2>{item.title} </h2>
                                <p>{item.description}</p>
                                <p>By {item.author}</p>
                            </FeedInfo>
                            <div>
                                <img src={item.media} alt={item.mediaDescription ?? item.title} style={{ width: 350, height: 200 }} />
                            </div>

                        </Feed>
                    </a>
                );
            })}
        </FeedWrapper>
    )
}