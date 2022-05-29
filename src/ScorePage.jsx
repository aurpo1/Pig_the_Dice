import React from 'react'
import styles from './ScorePage.module.css';

export default function ScorePage() {

  const [winner, setWinner] = React.useState('winner-id');

  const handleReplay = () => {
    // 누르면 모든 정보 리셋 되고 시작 페이지로 이동
    console.log('you clicked replay button');
  }

  return (
    <div className={styles.score_container}>
      <div className={styles.inner}>
        <div className={styles.winner}>우승자는 Player <strong>{winner}</strong> 입니다!</div>
        <ul className={styles.players}>
          <li className={styles.player}>
            <span>Player {} : </span>
            <span>score</span>
          </li>
          <li className={styles.player}>
            <span>Computer {} : </span>
            <span>score</span>
          </li>
        </ul>
        <button className={styles.replay_btn} onClick={handleReplay}>Replay?</button>
      </div>
    </div>
  )
}
