import PropTypes from 'prop-types';
import { getRandomColor } from '..//../utils/getRandomColor';
import css from '../Statistics/Statistics.module.css';
export const Statistics = ({ title, stats }) => {
    return (<section className={css.statistics}>
 {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
            {stats.map(item=> <li className={css.item} key ={item.id} style={{backgroundColor: getRandomColor()}} >
                <span className={css.label}>{ item.label }</span>
      <span className={css.percentage}>{item.percentage}%</span>
    </li>)}
  </ul>
</section>)
}
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
}