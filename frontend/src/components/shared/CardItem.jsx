import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import apiClient from '../../api/apiClient'
import { useAuth } from '../context/AuthContext' // ✅ 使用 useAuth 來確保狀態同步
const CardItem = ({
  buttonText,
  image,
  title,
  subtitle,
  cardLink,
  itemId,
  itemType,
}) => {
  const { userId } = useAuth()
  const location = useLocation()
  const isHomepage = location.pathname === '/'
  const [isFavorited, setIsFavorited] = useState(false)
  const [favoriteId, setFavoriteId] = useState(null)

  useEffect(() => {
    // 初次載入檢查是否已收藏
    if (isHomepage || !userId) {
      // ✅ 若是首頁或未登入，重置收藏狀態
      setIsFavorited(false)
      setFavoriteId(null)
      return
    }
    apiClient
      .get(`/api/favorites/check`, {
        params: { user_id: userId, item_id: itemId, item_type: itemType },
      })
      .then((res) => res.data)
      .then((data) => {
        setIsFavorited(data.isFavorited)
        setFavoriteId(data.favoriteId || null)
      })
      .catch((err) => {
        console.error('Error fetching favorites:', err)
      })
  }, [itemId, itemType, userId])

  // 點擊收藏按鈕
  const handleFavoriteClick = () => {
    if (!userId) {
      alert('請先登入')
      return
    }

    // 如果已收藏，則取消收藏
    if (isFavorited) {
      apiClient
        .delete(`/api/favorites/${favoriteId}`)
        .then(() => {
          setIsFavorited(false)
          setFavoriteId(null)
        })
        .catch((err) => {
          console.error('Error deleting favorite:', err)
        })
    } else {
      // 如果未收藏，則新增收藏
      apiClient
        .post('/api/favorites', {
          item_id: itemId,
          item_type: itemType,
          user_id: userId,
        })
        .then((res) => res.data)
        .then((data) => {
          setIsFavorited(true)
          setFavoriteId(data.favorite.id)
        })
        .catch((err) => {
          console.error('Error adding favorite:', err)
        })
    }
  }

  return (
    <Card className={`card-item ${isHomepage ? 'homepage-card-item' : ''}`}>
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        className="card-item__top"
      />
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted card-item__button-subtitle">
          {subtitle}
        </Card.Subtitle>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <div className="card-item__button">
        {!isHomepage && (
          <button className="favorite-button" onClick={handleFavoriteClick}>
            <FontAwesomeIcon
              icon={isFavorited ? faHeartSolid : faHeartRegular}
            />
          </button>
        )}
        <Link to={cardLink}>
          <Button variant="secondary">{buttonText}</Button>
        </Link>
      </div>
    </Card>
  )
}

export default CardItem
