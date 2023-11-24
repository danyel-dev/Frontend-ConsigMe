import { styled } from "styled-components";


const CommentStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5em;
    width: 700px;
`;

const Comments = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5em;
`;

const CommentIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 30px;
    font-size: 16px;
    background-color: blueviolet;
    color: white;
`;

const CommentBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em;
`;

const CommentMessage = styled.div`
    text-align: justify;
    font-weight: bold;
    color: rgba(0, 0, 0, .8);
    font-size: 14px;
`;


export default function Comment({comment}) {
    return (
        <Comments>
            <CommentStyle>
                <CommentIcon>CP</CommentIcon>

                <CommentBody>
                    <div>
                        <h4>{comment.user}</h4>
                        <small>{comment.created_at}</small>
                    </div>
                    
                    <CommentMessage>
                        {comment.message}
                    </CommentMessage>
                </CommentBody>
            </CommentStyle>
        </Comments>
    );
}
