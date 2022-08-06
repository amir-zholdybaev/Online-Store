var multiItemSlider = (function () {
    return function (selector, config) {
        var
            _mainElement = document.querySelector(selector), // основный элемент блока
            _sliderWrapper = _mainElement.querySelector('.product-slider__row'), // обертка для .slider-item
            _sliderItems = _mainElement.querySelectorAll('.product-slider__column'), // элементы (.slider-item)
            _sliderControls = _mainElement.querySelectorAll('.product-slider__control'), // элементы управления
            _sliderControlLeft = _mainElement.querySelector('.product-slider__control_left'), // кнопка "LEFT"
            _sliderControlRight = _mainElement.querySelector('.product-slider__control_right'), // кнопка "RIGHT"
            _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
            _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
            _transform = 0, // значение транфсофрмации .slider_wrapper
            _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
            _count = Math.round(_wrapperWidth / _itemWidth),
            // позиции элемента
            _positionItems = {
                min: 0,
                max: _sliderItems.length - 1,
                left: 0,
                right: _count - 1
            },
            _items = []; // массив элементов
          // наполнение массива _items
            _sliderItems.forEach(function (item, index) {
                _items.push({ item: item, position: index, transform: 0 });
            });

        var _transformItem = function (direction) {
            if (direction === 'right') {
                if ((_positionItems.left + _wrapperWidth / _itemWidth - 1) >= _positionItems.max) {
                    return;
                }
                if (!_sliderControlLeft.classList.contains('product-slider__control_show')) {
                    _sliderControlLeft.classList.add('product-slider__control_show');
                }
                if (_sliderControlRight.classList.contains('product-slider__control_show') && (_positionItems.left + _wrapperWidth / _itemWidth) >= _positionItems.max) {
                    _sliderControlRight.classList.remove('product-slider__control_show');
                }
                _positionItems.left++;
                _positionItems.right++
                _transform -= _step;
            }
            if (direction === 'left') {
                if (_positionItems.left <= _positionItems.min) {
                    return;
                }
                if (!_sliderControlRight.classList.contains('product-slider__control_show')) {
                    _sliderControlRight.classList.add('product-slider__control_show');
                }
                if (_sliderControlLeft.classList.contains('product-slider__control_show') && _positionItems.left - 1 <= _positionItems.min) {
                    _sliderControlLeft.classList.remove('product-slider__control_show');
                }
                _positionItems.left--;
                _positionItems.right--;
                _transform += _step;
            }
            _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
            if (e.target.classList.contains('product-slider__control')) {
                e.preventDefault();
                var direction = e.target.classList.contains('product-slider__control_right') ? 'right' : 'left';
                _transformItem(direction);
            }
        };

        var _setUpListeners = function () {
            // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
            _sliderControls.forEach(function (item) {
                item.addEventListener('click', _controlClick);
            });
            window.addEventListener('resize', function () {
                var _wrapperWidthNew = parseFloat(getComputedStyle(_sliderWrapper).width);
                var _itemWidthNew = parseFloat(getComputedStyle(_sliderItems[0]).width);
                if (_count !== Math.round(_wrapperWidthNew / _itemWidthNew)) {
                    _wrapperWidth = _wrapperWidthNew;
                    _itemWidth = _itemWidthNew;
                    _count = _wrapperWidth / _itemWidth;
                    if (_positionItems.left + _count > _positionItems.max) {
                        _positionItems.right = _positionItems.max;
                        _positionItems.left = _positionItems.right - _count + 1;
                    } else {
                        _positionItems.right = _positionItems.left + _count - 1;
                    }
                    _step = _itemWidth / _wrapperWidth * 100;
                    _transform = -_step * _positionItems.left;
                    _sliderWrapper.style.transition = 'none';
                    _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
                    setTimeout(function () {
                        _sliderWrapper.style.transition = 'transform 0.6s ease';
                    }, 400);
                    if (_positionItems.left === 0) {
                        _sliderControlLeft.classList.remove('product-slider__control_show');
                    } else {
                        _sliderControlLeft.classList.add('product-slider__control_show');
                    }
                    if (_positionItems.right === _positionItems.max) {
                        _sliderControlRight.classList.remove('product-slider__control_show');
                    } else {
                        _sliderControlRight.classList.add('product-slider__control_show');
                    }
                }
            });
        }

        // инициализация
        _setUpListeners();

        return {
            right: function () { // метод right
                _transformItem('right');
            },
            left: function () { // метод left
                _transformItem('left');
            }
        }

    }
}());

var slider = multiItemSlider('#product-slider');
var slider2 = multiItemSlider('#product-slider2');

// function heightDecrease(selector, elementWidth, elementHeight) {
//     var element = document.querySelectorAll(selector);
//     var widthDifference = 0;
//     var heightDecrement = 0;
//     widthDifference = elementWidth - element[0].offsetWidth;
//     heightDecrement = elementHeight - widthDifference;
//     element.forEach(function(element) {element.style.height = heightDecrement + "px";}); 
// }

// window.addEventListener('DOMContentLoaded', function() {
//     heightDecrease('.product-item__img', 263, 234);
// });
// window.addEventListener('resize', function() {
//     heightDecrease('.product-item__img', 263, 234);
// });



